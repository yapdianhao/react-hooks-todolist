export default {
    down(size) {
        const sizes = {
            xs: '575.98x',
            md: '991.98px'
        };
        return `@media (max-width: ${sizes[size]})`;
    }
};