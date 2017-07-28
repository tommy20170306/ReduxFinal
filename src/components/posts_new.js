import React, {Component} from 'react';
import {Field, reduxForm } from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions';

class PostsNew extends Component{

	renderField(field){
		//console.log(field);

		const {meta: {touched, error} } = field; // const touched = field.meta.touched;
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;

		return(
			<div className={className}>
				<label htmlFor="test">{field.label}</label>
				<input 
					type="text" 
					{...field.input} 
					className={field.className}  			
				/>
				<p className="text-help">{touched ? error : ""}</p>
			</div>
		);
	}

	onSubmit(values){
		let data = {
			title: values.blog_title,
			content: values.blog_content,
			categories: values.blog_categories
		}

		createPost(values);
		
		//redirect to / on submit
		this.props.history.push('/');
	}

	render(){
		//const {handleSubmit: handleSubmit} = this.props;
		//const {handleSubmit} = this.props;
		//const handleSubmit = this.props.handleSubmit;

		const {handleSubmit, touchAll} = this.props;

		return (
			<div>
				<div className="text-xs-right">
					<Link to="/" className="btn btn-danger">Back</Link>
				</div>
				<form className="form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>

					<Field 
						name="blog_title" 
						label="Title" 
						component={this.renderField} 
						className="form-control" 
					/>

					<Field 
						name="blog_categories" 
						label="Categories (a, b, c)" 
						component={this.renderField} 
						className="form-control" 
					/>

					<Field 
						name="blog_content" 
						label="Content" 
						component={this.renderField} 
						className="form-control" 
						type="textarea"
					/>
					
					<button type="submit" className="btn btn-primary">Submit</button>
					<button type="reset" className="btn btn-warning">Cancel</button>
				</form>
			</div>
		)
	}
}

function validate(values){
	const errors = {};

	if(!values.blog_title){
		errors.blog_title = "Enter a title.";
	}else if(values.blog_title.length > 10){
		errors.blog_title = "Too long!";
	}

	if(!values.blog_categories){
		errors.blog_categories = "Enter some categories.";
	}else if(!values.blog_categories.match(/^[\w]+((\,\s[\w]+)+)?$/)){
		errors.blog_categories = "Incorrect format!";
	}

	if(!values.blog_content){
		errors.blog_content = "Enter some content.";
	}

	return errors;
}

export default reduxForm({
  // a unique name for the form
  form: 'PostsNewForm',

  //validate: validate
  validate
})(
	connect(null, {createPost})(PostsNew)
);