import React from 'react'
import { Address, useContractReads, erc721ABI } from 'wagmi';
import { CollateNFTtype } from '../utils/types/CollateNFTtype';
import { BigNumber, ethers } from 'ethers';
import { useState, SyntheticEvent } from 'react';
import { ContractContext } from '../pages/_app';
import { DisplayNFT } from './DisplayNFT';

export const CollateNFTs = ({ contractAddress, totalSupply = 1 }: CollateNFTtype) => {

    const contractToRead__ = []
    for (let i = 0; i < totalSupply; i++) {
        contractToRead__.push({
            address: contractAddress,
            abi: erc721ABI,
            functionName: 'tokenURI',
            args: [BigNumber.from(i)]
        })
    }

    const [contractToRead, setContractToRead] = useState<String[]>([]);

    const { data: URICollection } = useContractReads({
        contracts: contractToRead__,
        onSuccess(data: String[]) {
            setContractToRead(data)
        },
        onSettled(data, error) {
            console.log(data, error)
        },
    })

    return (
        // <div>Collate NFTS</div>
        // {contractToRead.map((e:SyntheticEvent) => <div>Hello</div>)}
        <div className=" w-full grid grid-cols-3 gap-4 ">{contractToRead.map((e, i) => <DisplayNFT uri={e as string} key={i} />)}</div>
    )
}