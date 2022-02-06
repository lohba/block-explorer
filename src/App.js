import Blocks from './components/Blocks';

const ethers = require('ethers');
//require('dotenv').config();
const { useEffect, useState } = require('react');


export default function App() {
  //return <h1>Block Explorer</h1>;
  const [blockNumber, setBlockNumber] = useState(0)
  const [block, setBlock] = useState([])

  const url ='https://eth-rinkeby.alchemyapi.io/v2/NDdNGFpNlYU3rcTwh-xDzZiuAMyW7IM2'

 
  const provider = new ethers.providers.JsonRpcProvider(url);

  const fetchHeaderData = async () => {
    let myBlockNum = await provider.getBlockNumber()
    setBlockNumber(myBlockNum)

    let myBlock = await provider.getBlockWithTransactions(myBlockNum)
    setBlock(prevBlock => [myBlock, ...prevBlock])
    
  }
  fetchHeaderData()
  
  return (
    <div>
      {
          <Blocks 
            block={block}
          />
      }
      </div>
  )
};

