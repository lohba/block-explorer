export default function SpecificBlock({block, myBlockN, setMyBlockN}) {

    function back(){
        setMyBlockN(0)
    }
    return(
        <div className="specific-block-container" >
            {block.map((b, i) => {
                if(b.number === myBlockN) {
                    return (
                        <div className="specific-block" key={i}>
                            <div className="block--prop">
                                    <p>block number:</p>
                                    <p className="block--prop--second">{b.number}</p>
                            </div>
                            <div className="block--prop">
                                    <p>timestamp:</p>
                                    <p className="block--prop--second">{b.timestamp}</p>
                            </div>
                            <div className="block--prop">
                                    <p>difficulty:</p>
                                    <p className="block--prop--second">{b.difficulty}</p>
                            </div>
                            <div className="block--prop">
                                    <p>parent hash:</p>
                                    <p className="block--prop--second">{b.parentHash}</p>
                            </div>
                            <div className="block--prop">
                                    <p>nonce:</p>
                                    <p className="block--prop--second">{b.nonce}</p>
                            </div>
                            <div className="block--prop">
                                    <p>gas limit:</p>
                                    <p className="block--prop--second">{parseInt(b.gasLimit._hex)}</p>
                            </div>
                            <div className="block--prop">
                                    <p>gas used:</p>
                                    <p className="block--prop--second">{parseInt(b.gasUsed._hex)}</p>
                            </div>
                            <button className="specific-block-button" onClick={back}>Back</button>
                        </div>
                    )
                }
            })}
        </div>
    )

}