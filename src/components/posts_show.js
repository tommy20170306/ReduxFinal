import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchPost} from '../actions';

class PostsShow extends Component{
	
	componentDidMount(){
		this.props.fetchPost(this.props.match.params.id);
	}

	render(){
		let {title, categories, content} = this.props.posts;
		return(
			<div>
				<small>Post #{this.props.match.params.id}</small>
				<br/><br/>
				<h3>{title}</h3>
				<div>{content}</div>
				<small>{categories}</small>
			</div>
		);
	}
}

function mapStateToProps({posts}){
	return {posts};
}

export default connect(mapStateToProps, {fetchPost})(PostsShow);