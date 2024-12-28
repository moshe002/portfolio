import { supabase } from "../supabase-config";

const retrieveBlogs = async () => {
    const { data, error } = await supabase.from('blogs').select();
    if (data) {
        return data;
    } else {
        return error
    }
};

const createBlog = async (content: string) => {
    const { error } = await supabase.from('blogs').insert({ blog_content: content });

    if (error) {
        return error;
    } else {
        return { is_success: true };
    }
};

const deleteBlog = async (id: number) => {
    const response = await supabase
    .from('blogs')
    .delete()
    .eq('id', id);

    return response;
};

const updateBlog = async (id: number, content: string) => {
    const { error } = await supabase
    .from('blogs')
    .update({ blog_content: content })
    .eq('id', id);

    if (error) {
        return error;
    } else {
        return { is_success: true };
    }
};

export { retrieveBlogs, createBlog, deleteBlog, updateBlog };