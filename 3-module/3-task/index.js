function camelize(str) {
    return str.replace(/-(\w)/g, (_, c) => c.toUpperCase());
}
