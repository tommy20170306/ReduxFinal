import React, {Component} from 'react';
import _ from 'lodash';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {fetchPosts} from '../actions';

class PostsIndex extends Component{
	componentDidMount(){
		this.props.fetchPosts();
		//this.renderPosts = this.renderPosts.bind(this);
	}

	render(){	
		return(
			<div>
				<div className="text-xs-right">
					<Link className="btn btn-primary" to="/posts/new">
						New
					</Link>
				</div>
				<h3>Posts Index</h3> 
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
	}

	renderPosts(){
		return _.map(this.props.posts, (post) => {
			 return (
				<li className="list-group-item" key={post.id}>
					ID: {post.id} <br/>
					Title: {post.title} <br/> 
					Categories: {post.categories} <br/>
					Content: {post.content}
				</li>
			);
		});
	}

}

function mapStateToProps(state){
	return{
		posts: state.posts
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchPosts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);