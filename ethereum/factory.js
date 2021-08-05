import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x24387ca8939E5376D0CdC999B05F9a0c7a25D961'
);
export default instance;
