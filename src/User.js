import userImg from './userImg.png';
import ReactDOM from 'react-dom';
import logo from './loading.gif';
import Blog from './Blog';

export default function User(props){
	let data = props.data
	return(
		<div className="user">
			<div className="mainInfo">
				<img src={userImg} alt="Аватар" className='userImg'></img>
				<div className='userName'>{data.name}</div>
				<div className='userUsername'>@{data.username}</div>
				<div className='userPhone'>{data.phone}</div>
				<div className='userWebsite'><a href='#' onClick={function(e){e.preventDefault()}}>{data.website}</a></div>
			</div>
			<div className='description'>
				<div className='userAdress'>{data.address.city}, {data.address.street}, {data.address.suite}, {data.address.zipcode} ({data.address.geo.lat} : {data.address.geo.lng})</div>
				<div className='userCompany'>{data.company.name}, "{data.company.catchPhrase}"; {data.company.bs}</div>
			</div>
			<input type="button" value="blogs" className='userBlogs' data-id={data.id} onClick={function(e){
				ReactDOM.render(<div id="center_text"><img src={logo} className="loadingImg" alt="Loading..." /></div>,document.getElementById("root"));
				
				fetch('https://jsonplaceholder.typicode.com/posts')
				.then(res => res.json())
				.then(res => {
				  
				  if (res && Array.isArray(res) && res.length > 0) {
					  ReactDOM.render(<><h1>Блоги пользователя {data.name}</h1><div id="blogs">{res.map(blog => {
						if(blog.userId == data.id)
							return <Blog data={blog} />
					  })}</div></>,document.getElementById("root"));
				  } //typeof res == 'array'
				});
			}} />
		</div>
	)
}