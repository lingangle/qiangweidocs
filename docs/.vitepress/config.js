export default {
	title: "A good title",
	description: "good good study,day day ",
	base: '/qiangweidocs/',
	themeConfig: {
		nav: [
			{
				text: "click here", link: '/guide/getting-started', activeMatch: "/guide/"
			}
		],
		sidebar: {
			'/guide/': [
				{
					text: "click here",
					collapsible: false,
					items: [
						{ text: "Getting-Started", link: "/guide/getting-started" },
					]
				}
			]
		},
	}
}
