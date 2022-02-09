export default function Blocks({block, setMyBlockN}) {

    function clickBlockNum(e) {
        setMyBlockN(parseInt(e.target.name))
    }

    return (
        <div className="block--container">
            {block.map((b,i) => b.number!== 0 && 
            <div className="block" key={i}>
                <p>block number: <a href="#" name={b.number} onClick={clickBlockNum}>{b.number}</a></p>
                <p>timestamp: {b.timestamp}</p>
                <p>txs count: {b.transactions.length}</p>
            </div>)}
        </div>
    )
}