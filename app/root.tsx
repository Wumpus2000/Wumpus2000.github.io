import {
	cookieStorageManagerSSR,
	ChakraBaseProvider,
	useConst,
	cookieStorageManager
} from "@chakra-ui/react";
import {
	json,
	type LinksFunction,
	type LoaderFunction,
	type MetaFunction
} from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import Layout from "./components/layout/Layout";
import theme from "./components/utils/theme";
import { Document, DocumentWoLoader } from "./Document";
import Catch from "./components/layout/boundaries/Catch";
import Error from "./components/layout/boundaries/Error";

// ------------------------- META -------------------------

export const meta: MetaFunction = () => ({
	title: "Wampas | Discord Bot",
	robots: "all",
	description:
		"Wampas discord bot. Spellcheck, grammarcheck, definition, synonyms and more. invite Wampas now to your discord server!",
	keywords:
		"discord bot, discord, bot, Wampas, Wumpus, fun bot, fun discord bot, Wumpus bot, Wumpus discord bot, Wampas discord bot, Wampas bot, word synonyms, definition, synonyms, slash commands",
	charset: "utf-8",
	viewport: "width=device-width,initial-scale=1",
	author: "Wumpus"
});

// ------------------------- LINKS -------------------------

export const links: LinksFunction = () => {
	return [
		{ rel: "preconnect", href: "https://fonts.googleapis.com" },
		{
			rel: "preconnect",
			href: "https://fonts.gstatic.com",
			crossOrigin: "anonymous"
		},
		{
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&&family=Outfit:wght@700;800;900&display=swap"
		}
	];
};

// ------------------------- APP -------------------------

export default function App() {
	const { cookies } = useLoaderData();
	const manager = useConst(cookieStorageManagerSSR(cookies));

	return (
		<Document>
			<ChakraBaseProvider
				resetCSS
				colorModeManager={manager}
				theme={theme}
			>
				<Layout>
					<Outlet />
				</Layout>
			</ChakraBaseProvider>
		</Document>
	);
}

// ------------------------- ROOT LOADER -------------------------

export const loader: LoaderFunction = async ({ request }) => {
	return json({ cookies: request.headers.get("cookie") ?? "" });
};

// ------------------------- CATCH -------------------------

export function CatchBoundary() {
	return (
		<DocumentWoLoader>
			<ChakraBaseProvider
				theme={theme}
				resetCSS
				colorModeManager={cookieStorageManager}
			>
				<Catch />
			</ChakraBaseProvider>
		</DocumentWoLoader>
	);
}

// ------------------------- ERROR -------------------------

export function ErrorBoundary({ error }: { error: Error }) {
	return (
		<DocumentWoLoader>
			<ChakraBaseProvider
				theme={theme}
				resetCSS
				colorModeManager={cookieStorageManager}
			>
				<Error error={error} />
			</ChakraBaseProvider>
		</DocumentWoLoader>
	);
}
