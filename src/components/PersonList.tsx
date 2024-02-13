import {Name} from './Person.types'

type namelist = {
    names: Name[]
}


export const PersonList = (props:namelist) =>{
    return(
        <div>
            {
                props.names.map(name => {
                    return(
                        <div>
                            <h2>{name.first}</h2>
                            <h2>{name.last}</h2>
                        </div>
                        
                    )
                })
            }
        </div>
    )
}