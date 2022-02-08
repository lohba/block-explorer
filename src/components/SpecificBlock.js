export default function SpecificBlock({block, myBlockN}) {
    return(
        <div className="specific-block" >
            {block.map((b, i) => {
                if(b.number === myBlockN) {
                    return (
                        <div className="block--prop" key={i}>
                                <p>block n:</p>
                                <p className="block--prop--second">{b.number}</p>
                        </div>
                    )
                }
            })}
        </div>
    )

}