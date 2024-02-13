type namelist = {
    name:{
        first:string
        last:string
    }[]
}


export const PersonList = (props:namelist) =>{
    return(
        <div>
            {
                props.name.map(names => {
                    return(
                        <div>
                            <h2>{names.first}</h2>
                            <h2>{names.last}</h2>
                        </div>
                        
                    )
                })
            }
        </div>
    )
}