import { usePage } from '@inertiajs/react';

const Posts = () => {
    const { posts } = usePage().props;
    console.info({ posts });
    return (
        <div>
            Danh sach Post
            <ul>
                {posts?.map((p) => (
                    <li key={p.id}>
                        {p.title}
                        {p.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Posts;
