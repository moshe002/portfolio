import { supabase } from "../supabase-config";

type LOGIN_TYPES = {
    email: string,
    password: string,
};

const login = async (prop:LOGIN_TYPES) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: prop.email,
        password: prop.password,
    });

    if (data && data.session) {
        return { token: data.session.access_token };
    } else {
        return { message: error?.message };
    }
};

const logout = async () => {
    const { error } = await supabase.auth.signOut()
    return error ? error : { response: "Successfully logged out." };
};

export { login, logout };