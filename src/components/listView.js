import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ListView extends React.Component {
    state = {
        loading: true
    }
    componentDidMount() {
        this.setState({
            loading: false
        })
    }


    render() {
        if (this.state.loading) {
            return (
                <p>Loading...</p>
            )
        } else {
            return (
                <section className="section">
                    <div className="grid">
                        {(this.props.posts.map((post, index) => {
                            return (
                                <div key={post.id} className={index % 2 === 0 ? 'item item--medium' : ' item item--large'}>
                                    <div style={{ backgroundImage: `url(${JSON.stringify(post.imageUrl)})` }} className="postImage"></div>
                                    <Link to={{
                                        pathname: `/posts/${post.id}`,
                                        state: {
                                            id: post.id
                                        }
                                    }}>
                                        <div className="item__details">
                                            <div className="postTitle">{post.title}</div>
                                            <div>{post.body} </div>
                                        </div>
                                    </Link>
                                    <div className="actions">
                                        <i
                                            className={post.liked ? 'fas fa-thumbs-up' : 'far fa-thumbs-up'}
                                            onClick={() => this.props.toggleLike(post.id)} ></i>
                                        <i
                                            className={post.disliked ? 'fas fa-thumbs-down' : 'far fa-thumbs-down'}
                                            onClick={() => this.props.toggleDisLike(post.id)} ></i>
                                        <i
                                            className={post.bookmarked ? 'fas fa-bookmark' : 'far fa-bookmark'}
                                            onClick={() => this.props.bookmarkPost(post.id)}></i>
                                    </div>
                                </div>
                            );
                        }))}
                    </div>
                </section>
            )
        }

    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleLike: (postId) => dispatch({type: "toggleLike", id: postId}),
        toggleDisLike: (postId) => dispatch({type: "toggleDisLike", id: postId}),
        bookmarkPost: (postId) => dispatch({type: "bookmarkPost", id: postId}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListView);