const astroConfig = {"base":"/posfaq/","root":"file:///C:/Users/Lakshan.Perera/dev/faq/","srcDir":"file:///C:/Users/Lakshan.Perera/dev/faq/src/","build":{"assets":"_astro"},"markdown":{"shikiConfig":{"langs":[]}}};
const ecIntegrationOptions = {};
let ecConfigFileOptions = {};
try {
	ecConfigFileOptions = (await import('./ec-config_CzTTOeiV.mjs')).default;
} catch (e) {
	console.error('*** Failed to load Expressive Code config file "file:///C:/Users/Lakshan.Perera/dev/faq/ec.config.mjs". You can ignore this message if you just renamed/removed the file.\n\n(Full error message: "' + (e?.message || e) + '")\n');
}

export { astroConfig, ecConfigFileOptions, ecIntegrationOptions };
