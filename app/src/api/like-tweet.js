import { useWorkspace } from '@/composables'

export const likeTweet = async (tweet) => {
    const { wallet, program } = useWorkspace()
    await program.value.rpc.likeTweet({
        accounts: {
            author: wallet.value.publicKey,
            tweet: tweet.publicKey,
        },
    })
}
