import React, {Component} from 'react';
import {Field, reduxForm } from 'redux-form';

class PostsNew extends Component{
	renderField(field){
		console.log(field);
		return(
			<div className="form-group">
				<label htmlFor="test">{field.label}</label>
				<input 
					type="text" 
					{...field.input} 
					className={field.className}  			
				/>
				<p className="alert alert-warning">{field.meta.error}</p>
			</div>
		);
	}
	
	submitForm(e){
		e.preventDefault();
	}

	render(){
		return (
			<div>
				<form className="form" onSubmit={this.submitForm}>

					<Field 
						name="title" 
						label="Title" 
						component={this.renderField} 
						className="form-control" 
					/>

					<Field 
						name="categories" 
						label="Categories (a, b, c)" 
						component={this.renderField} 
						className="form-control" 
					/>

					<div className="form-group">
						<label htmlFor="content">Content</label>
						<Field name="content" component="textarea" className="form-control" />
					</div>
					
					<button type="submit" className="btn btn-primary">Submit</button> &nbsp;
					<button type="reset" className="btn btn-warning">Cancel</button>
				</form>
			</div>
		)
	}
}

function validate(values){
	const errors = {};

	if(!values.title){
		errors.title = "Enter a title.";
	}else if(values.title.length > 10){
		errors.title = "Too long!";
	}

	if(!values.categories){
		errors.categories = "Enter some categories.";
	}else if(!values.categories.match(/^[\w]+((\,\s[\w]+)+)?$/)){
		errors.categories = "Incorrect format!";
	}

	if(!values.content){
		errors.content = "Enter some content.";
	}

	return errors;
}

export default reduxForm({
  // a unique name for the form
  form: 'PostsNewForm',

  //validate: validate
  validate
})(PostsNew);