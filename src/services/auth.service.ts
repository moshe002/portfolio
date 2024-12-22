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

    return data ? data : error;
};

const logout = async () => {
    const { error } = await supabase.auth.signOut()
    return error ? error : { response: "Successfully logged out." };
};

export { login, logout };