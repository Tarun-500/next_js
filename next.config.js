module.exports = {
    webpack: (config, { dev }) => {
        if (dev) {
            config.module.rules.forEach(rule => {
                if (rule.oneOf) {
                    rule.oneOf.forEach(oneOf => {
                        if (oneOf.use && oneOf.use.loader === 'css-loader') {
                            oneOf.use.options.sourceMap = false;
                        }
                    });
                }
            });
        }
        return config;
    },
};
