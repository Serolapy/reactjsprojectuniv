export default function Blog(props){
	let data = props.data
	return(
		<div className="blog" data-id={data.id}>
			<h2><a href="#" onClick={function(e){alert("Открытие блога")}}>{data.title}</a></h2>
			<div className="previewBlog">{data.body}</div>
		</div>
	)
}