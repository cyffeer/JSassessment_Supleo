/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NBAnft = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, color, position, number) {
    const NFT = {
        "name": name,
        "color": color,
        "position": position,
        "number": number
    };
    NBAnft.push(NFT);
    console.log("Minted: " + name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i < NBAnft.length; i++){
        console.log(`NFT ${i + 1}:`);
        console.log("Name: " + NBAnft[i].name);
        console.log("Color: " + NBAnft[i].color);
        console.log("Position: " + NBAnft[i].position);
        console.log("Number: " + NBAnft[i].number);
        console.log("---------------------------");
    }
}
// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal NFTs minted: " + NBAnft.length);
}

// call your functions below this line
mintNFT("LeBron James", "Purple", "Small Forward", 6);
mintNFT("Stephen Curry", "Gold", "Point Guard", 30);
mintNFT("Kevin Durant", "Black", "Small Forward", 7);

console.log("\nListing all NFTs:");
listNFTs();
getTotalSupply();
