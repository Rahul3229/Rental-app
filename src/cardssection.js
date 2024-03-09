import ResultsCard from './results_card.js';
import Data from './assets1.json';
export default function CardSection()
{
return(
    <div className="contain">
    {
        Data.map((item,id)=>(
        <ResultsCard src={item.src} name={item.name} description={item.description} rating={item.rating} id={item.id} />
        ))
    }        

        
    </div>
)
}