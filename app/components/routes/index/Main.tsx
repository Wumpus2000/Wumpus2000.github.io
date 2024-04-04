import {
	Button,
	Flex,
	Heading,
	HStack,
	Image,
	Link,
	Stack,
	Text,
	VStack,
	Wrap,
	WrapItem
} from "@chakra-ui/react";
import DiscordIcon from "../../layout/icons/DiscordIcon";
import { config } from "../../config/config";
import StrokeHeading from "~/components/layout/StrokeHeading";
import { motion } from "framer-motion";
import { Icon } from "@chakra-ui/react";
import { BsFillPeopleFill } from "react-icons/bs";

export default function Main() {
	return (
		<Flex
			px={4}
			pos={"relative"}
			minH={"calc(100vh - 140px)"}
			justifyContent="center"
			alignItems={"center"}
		>
			<Stack direction={{ base: "column", md: "row" }} spacing={10}>
				<VStack w="100%" alignItems={"start"} spacing={5}>
					<Heading fontSize={"5xl"}>Wampas</Heading>
					<Text lineHeight={"170%"}>
					Welcome to Wampas Games Bot, your go-to companion for endless fun and excitement on Discord! This free and user-friendly bot is designed with simplicity in mind, ensuring that everyone can join in on the entertainment.


					</Text>
					<Wrap spacing={3} w="100%">
						<WrapItem>
							<Button
								as={Link}
								_hover={{
									textDecoration: "none",
									bg: "discord.900"
								}}
								h="40px"
								px={4}
								fontWeight={500}
								bg="discord.100"
								color={"white"}
								transform={"auto-gpu"}
								_active={{ scale: 0.9 }}
								rounded="xl"
								href={config.discordBotInvite}
							>
								<HStack h={"100%"} alignItems={"center"}>
									<DiscordIcon />
									<Text>Invite bot to your server</Text>
								</HStack>
							</Button>
						</WrapItem>
						<WrapItem>
							<Button
								as={Link}
								rounded="xl"
								bg={"alpha"}
								href={config.discordServerInvite}
								variant={"solid"}
								transform={"auto-gpu"}
								_active={{ scale: 0.9 }}
								_hover={{ textDecor: "none", bg: "alpha100" }}
							>
								<HStack spacing={2}>
									<Icon as={BsFillPeopleFill} />
									<Text fontWeight={600}>Need help?</Text>
								</HStack>
							</Button>
						</WrapItem>
						<WrapItem>
							<Button
								as={Link}
								rounded="xl"
								bg={"alpha"}
								transform={"auto-gpu"}
								_active={{ scale: 0.9 }}
								href={config.topggVote}
								variant={"solid"}
								_hover={{ textDecor: "none", bg: "alpha100" }}
							>
								<HStack spacing={2}>
									<Image
										src="/topgg.svg"
										h="19px"
										alt="top.gg logo"
									/>
									<Text fontWeight={600}>Vote</Text>
								</HStack>
							</Button>
						</WrapItem>
					</Wrap>
				</VStack>
				<Image
					h="250px"
					src="/wampas.svg"
					draggable={false}
					alt="Wampas logo"
				/>
			</Stack>
			<motion.div
				style={{ bottom: "-50px", position: "absolute" }}
				initial={{ y: 80, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={{ ease: config.ease, duration: 1 }}
			>
				<StrokeHeading>Explore</StrokeHeading>
			</motion.div>
		</Flex>
	);
}
