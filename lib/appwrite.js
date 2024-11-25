{
  /*https://appwrite.io/docs/quick-starts/react-native*/
}
//import { useState } from 'react';
import { Client, Account, ID, Models, Databases } from "react-native-appwrite";

const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.johnnychongdev.vai",
  projectId: "67428a050028e3898c4c",
  databaseId: "67428c2700141b2b8217",
  userCollectionId: "67428c44003bb451d185",
  videoColletionId: "67428c640006dc3a1a3d",
  storageId: "674291ae002dce22995c",
};

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(config.projectId)
  .setPlatform(config.platform);

export const account = new Account(client);
export const databases = new Databases(client);

