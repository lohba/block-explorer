import Blocks from './components/Blocks';
import SpecificBlock from './components/SpecificBlock';

const ethers = require('ethers');
//require('dotenv').config();
const { useEffect, useState } = require('react');


export default function App() {
  //return <h1>Block Explorer</h1>;
  const [blockNumber, setBlockNumber] = useState(0)
  const [block, setBlock] = useState([])
  const [toggle, setSwitch] = useState(false)
  const [myBlockN, setMyBlockN] = useState(0)


  const url ='https://eth-rinkeby.alchemyapi.io/v2/NDdNGFpNlYU3rcTwh-xDzZiuAMyW7IM2'

 
  const provider = new ethers.providers.JsonRpcProvider(url);

  const fetchHeaderData = async () => {
    let myBlockNum = await provider.getBlockNumber()
    setBlockNumber(myBlockNum)

    let myBlock = await provider.getBlockWithTransactions(myBlockNum)
    setBlock(prevBlock => [myBlock, ...prevBlock])
 
  }
  
  const changeSwitch = () => {
    setSwitch(prevSwitch=> !prevSwitch)
  }

useEffect(() => {
  fetchHeaderData()
  setTimeout(changeSwitch, 10000) // Blocks mined 12-14 seconds
}, [toggle])

  return (

      myBlockN !== 0 ? 
      <SpecificBlock
        block={block}
        myBlockN={myBlockN}
        setMyBlockN={setMyBlockN}
      /> :
      <div>
        {
          <Blocks 
            block = {block}
            setMyBlockN={setMyBlockN}
          />
        }
        </div>
   
  )
};

