export default function SpecificBlock() {
    return(
        <div className="specific-block">
            {block.map((b, i) => {
                if(b.number === myBlockN) {
                    return (
                        <div className="block--prop">
                                <p>block n:</p>
                                <p className="block--prop--second">{b.number}</p>
                            </div>
                    )
                })}
        </div>
            
    )
}