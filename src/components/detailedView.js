import React from 'react';
import { connect } from 'react-redux';

class DetailedView extends React.Component {
    state = {
        loading: true,
        post: []
    }

    componentDidMount() {
        this.setState({ loading: false });
    }

    render() {
        if (this.state.loading) {
            return (
                <p>Loading...</p>
            )
        } else {
            const posts = this.props.posts.filter(post => post.id === this.props.location.state.id);
            return (
                <section className="section">
                    <div className="grid">
                        <div className="item item--full detailed" style={{ marginBottom: '2rem' }}>
                            <div style={{ backgroundImage: `url(${JSON.stringify(posts[0]['imageUrl'])})` }} className={`postImage`}></div>
                            <div className="item__details">
                                <div className="postTitle"> {posts[0]['title']}</div>
                                <div>
                                    <p>{posts[0]['body']}</p>
                                    <p>{posts[0]['body']}</p>
                                </div>
                                <div className="actions">
                                    <i
                                        className={posts[0].liked ? 'fas fa-thumbs-up' : 'far fa-thumbs-up'}
                                        onClick={() => this.props.toggleLike(posts[0].id)} ></i>
                                    <i
                                        className={posts[0].disliked ? 'fas fa-thumbs-down' : 'far fa-thumbs-down'}
                                        onClick={() => this.props.toggleDisLike(posts[0].id)} ></i>
                                    <i
                                        className={posts[0].bookmarked ? 'fas fa-bookmark' : 'far fa-bookmark'}
                                        onClick={() => this.props.bookmarkPost(posts[0].id)}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleLike: (postId) => dispatch({ type: "toggleLike", id: postId }),
        toggleDisLike: (postId) => dispatch({ type: "toggleDisLike", id: postId }),
        bookmarkPost: (postId) => dispatch({ type: "bookmarkPost", id: postId }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailedView);