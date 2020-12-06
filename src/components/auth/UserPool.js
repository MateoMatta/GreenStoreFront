
import {CognitoUserPool} from 'amazon-cognito-identity-js'

const poolData = {
    UserPoolId: 'us-east-1_X7PTssBYT',
    ClientId: '6u0hnse8s3f4ho5193ca27e0ia'
  }
  
export default new CognitoUserPool(poolData);