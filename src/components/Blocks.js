export default function Blocks({block}) {

    return (
        <div className="block--container">
            {block.map((b,i) => b.number!== 0 && 
            <div className="block" key={i}>
                <p>block number: <b href="#" name={b.number}>{b.number}</b></p>
                <p>timestamp: {b.timestamp}</p>
                
            </div>)}
        </div>
    )
}