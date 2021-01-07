import path from 'path'
import {ApiModel, ApiPackage} from '@microsoft/api-extractor-model'

const apiModel: ApiModel = new ApiModel()
const apiPackage: ApiPackage = apiModel.loadPackage(
  path.resolve(__dirname, '../../docs/temp/api/ui.api.json')
)

console.log(apiPackage)

for (const member of apiPackage.members) {
  console.log('displayName', member.displayName)
}
