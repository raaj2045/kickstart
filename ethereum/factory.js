import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x05030Afa4cA18c0eC1b5CEd51aA0b4Ac3b703727'
);

export default instance;