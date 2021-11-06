import React,{useEffect,useState} from 'react'
import  Youtube from 'react-youtube'
import './Rowpost.css'
import axios from '../../axios'
import { imageUrl,API_KEY} from '../../constants/Constants'



function Rowpost(props) {
    const [movies, setMovies] = useState([])
    const [urlId,setUrlId]=useState('')
    useEffect(() => {
        axios.get(props.url).then(Response=>{
            console.log(Response.data)
            setMovies(Response.data.results)
        }).catch(err=>{
      //alert('someting Error')
        })
        
        
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
        
          autoplay: 0,
        },
      };
      const handleMovie=(id)=>{
          console.log(id)
          axios.get(`movie/${id}?api_key=${API_KEY}&language=en-US`).then(Response=>{
           // if (Response.data.results.length!==0){
              //   setUrlId(Response.data.results[0])
               
           // }else{
               //  console.log('Tralier Not Available')
            // }

          })

      }

    
    return (
        <div className="row">
            <h2>
             {props.title}
            </h2>
            <div className="posters">
                {movies.map((obj)=>
                    
                <img onClick={()=>handleMovie(obj.id)}  className={props.isSmall ?'smallposter': 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="posters" />

                )}
              
                

    

            </div>
          { urlId && < Youtube  videoId={urlId.key} opts={opts} />}
         
        </div>
    )
}

export default Rowpost
