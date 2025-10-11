async function getData() {
    const query = `
    *[_type == 'blog'] | order(_createdAt desc) {
        title,
            description,
            "currentSlug": slug.current
    }
    `
}

export default function Home() {
    return (
        <div>
            <h1>index page</h1>
        </div>
    )
}