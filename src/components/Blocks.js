export default function Blocks({block}) {


    return (
        <div className="block--container">
            {block.map((b,i) => b.number!== 0 && 
            <div className="block" key={i}>
                <p>block n: <a href="#" name={b.number}>{b.number}</a></p>
            </div>)}
        </div>
    )
}