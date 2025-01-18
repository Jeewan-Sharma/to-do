export const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        return "Email is required.";
    }
    if (!emailRegex.test(email)) {
        return "Please enter a valid email address.";
    }
    return "";
};

export const validatePassword = (password: string) => {
    if (!password) {
        return "Password is required.";
    }
    if (password.length < 8) {
        return "Password must be at least 8 characters long.";
    }
    if (!/[A-Z]/.test(password)) {
        return "Password must contain at least one uppercase letter.";
    }
    if (!/[0-9]/.test(password)) {
        return "Password must contain at least one number.";
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        return "Password must contain at least one special character.";
    }
    return "";
};

export const validateConfirmPassword = (password: string, confirmPassword: string) => {
    if (!confirmPassword) {
        return "Password confirmation is required.";
    }
    if (confirmPassword !== password) {
        return "Passwords do not match.";
    }
    return "";
};

export const validateName = (name: string) => {
    //!REM: regex for letters and spaces
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!name) {
        return "Name is required.";
    }
    if (!nameRegex.test(name)) {
        return "Name should only contain letters and spaces.";
    }
    if (name.length < 2 || name.length > 50) {
        return "Name must be between 2 and 50 characters long.";
    }
    return "";
};

export const validatePhoneNumber = (phoneNumber: string) => {
    //!REM: regex for Matching numbers with an optional "+" and 10-15 digits
    const phoneRegex = /^[+]?[0-9]{10,15}$/;
    if (!phoneNumber) {
        return "Phone number is required.";
    }
    if (!phoneRegex.test(phoneNumber)) {
        return "Please enter a valid phone number (10-15 digits).";
    }
    return "";
};
