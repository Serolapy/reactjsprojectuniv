import ReactDOM from 'react-dom';
import logo from './loading.gif';
import User from './User';

export default function StartButton(){
	return (
		<>
			<div id="type_to_load">
				Нажмите для загрузки
			</div>
			<input type="button" value="start" onClick={function(){
				ReactDOM.render(<img src={logo} className="loadingImg" alt="Loading..." />,document.getElementById("center_text"));

				fetch('https://jsonplaceholder.typicode.com/users')
      			.then(res => res.json())
      			.then(res => {
					
        			if (res && Array.isArray(res) && res.length > 0) {
						ReactDOM.render(<div id="users">{res.map(user => {
							return <User data={user} />
						})}</div>,document.getElementById("root"));
        			} //typeof res == 'array'
      			});
				
			}} />
		</>

		
	)
}
