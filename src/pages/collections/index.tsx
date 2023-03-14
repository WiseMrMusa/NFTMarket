import { UseToken } from "@/utils/types/wagmiTypes";
import Head from "next/head";
import Image from "next/image";
import { useState, SyntheticEvent } from 'react';
import { Address, erc721ABI, useContract, useContractRead, useProvider, useToken } from 'wagmi';
import { BigNumber } from 'ethers';
import handler from '../api/hello';
import { Router} from "next/router";
import { useRouter } from "next/navigation";

const NftCollection = () => {

    const provider = useProvider()
    const [nftAddress, setNftAddress] = useState<Address>();
    const { isError:NFTError } = useContractRead({
        address: nftAddress,
        abi: erc721ABI,
        functionName: 'tokenURI',
        args: [0 as unknown as BigNumber]
    })
    const router = useRouter();

    return (
        <>
            <Head>
                <title>NFT Marketplace</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <form
                    action={`./collections/${nftAddress}`}
                    className="mt-10 flex flex-col rounded-2xl border border-zinc-100 p-8 w-3/5 mx-auto gap-8"
                >
                    <div className="flex flex-col gap-4">
                        <label className=" text-2xl font-semibold">NFT Collection Address</label>
                        <input
                            type="text"
                            placeholder="NFT Contract Address"
                            onChange={(e) => setNftAddress(e.target.value as Address)}
                            className="flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm"
                        />
                    </div>
                    <button disabled={NFTError} className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70  flex-none disabled:bg-zinc-500 disabled:cursor-not-allowed "
                    >Check Collection</button>
                </form>
            </main>
        </>
    );
};

export default NftCollection;
