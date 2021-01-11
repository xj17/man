import React,{Component,Fragment}  from 'react'

export default class Wuliu extends Component{
	
	render(){
		return (
		    <Fragment>
			    <span class="s1">物流方案</span>
			    <div id="ricon1">
			    	 <table  cellSpacing="0">
						 <tbody>
						 <tr><th>方案名称</th><th>运费</th><th>操作</th></tr>
			    	 	<tr><td>普通快递</td><td>￥2.00</td><td >编辑 删除</td></tr>
			    		<tr><td>顺丰快递</td><td>￥10.00</td><td>编辑 删除</td></tr>
			    		<tr><td><input type="text" placeholder="请输入方案名" /></td><td><input type="text" placeholder="请输入运费" /></td><td>保存 删除</td></tr>
			    		<tr ><td></td><td>+新增方案</td><td></td></tr>
						 </tbody>
			    	 	
			    	 </table>
			    </div>
			</Fragment>
		)
	}
	
}