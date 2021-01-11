 import React,{Component,Fragment}  from 'react'
 
 export default class Pay extends Component{
 	
 	render(){
 		return (
 		    <Fragment>
 			    <p>支付方式</p>
 			    <p>快速结账</p>

 			    		<hr/>
 			    		<div id="rile">
 			    			<input type="checkbox" value="sandbox"/>sandbox<br />
							 <form>
 			    	<tr><td>Username：<input type="text" placeholder="请输入" /> </td></tr>
 			    	<tr><td>Password： <input type="text" placeholder="请输入" /></td></tr>
 			    	<tr><td>Signature： <input type="text" placeholder="请输入" /></td></tr>
 			    	<tr><td><button type="button">绑定</button></td></tr>
							 </form>
 			    		</div>
						 <span id="riri">
						 个人账号快速绑定指引<br/>
                         设置或关联已存在的paypal沙盒账户
						 </span>
 			</Fragment>
 		)
 	}
 	
 }