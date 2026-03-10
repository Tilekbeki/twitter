type Params = {tag: string}

export default async function TestPage({searchParams}: {searchParams: Promise<Params>}) {
    const {tag} = await searchParams

    return <h1 className="text-3xl font-bold mb-6">Explorе {!!tag && `by #${tag}`}</h1>

}