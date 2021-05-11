import React from 'react'

class Input extends React.Component
{
	render()
	{
		let {type}=this.props
		if(type==="dropdown")
		{
			let {options}=this.props
			return <select {...this.props}>
				{options.map(x=><option value="">{x}</option>)}
			</select>	
		}
		else
		{
			return <input {...this.props} />
		}
	}
}
export default Input;