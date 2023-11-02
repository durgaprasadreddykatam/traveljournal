import "./tourgrid.css"
import image from "./images/image1.jpeg"
import data from "./data.js"

function Totalgrid(){
    const card=data.map(item =>{
        return(
            <div>
                <Tourgrid
                item={item}
                />
            </div>
        )
    })
    return(
        <div>{card}</div>
    )
}

function Tourgrid(props){
    return(
        <div className="tourgrid">
            <Image image={props.item.image}/>
            <Descriptiongrid country={props.item.country} Location={props.item.Location} Dates={props.item.Dates} Description={props.item.Description} />

        </div>
        
    )
}



function Image(props){
    return(
            <div className="imagebox">
                <img className="image" src={props.image}/>
            </div>
        )
}


function Descriptiongrid(props){
    return(
            <div className="descriptiongrid">
                <Location Location={props.Location} country={props.country}/>
                <Description Dates={props.Dates} Description={props.Description}/>
           </div>
        
    )
}


function Location(props){
    return(
            <div className="LocationBox">
                <div className="country">{props.country}</div>
                <div className="Location">{props.Location}</div>
            </div>
        )
}


function Description(props){
    return(
            <div className="descriptionbox">
                <div className="Dates">{props.Dates}</div>
                <div className="description">{props.Description}</div>
            </div>
        )
}






export default Totalgrid;