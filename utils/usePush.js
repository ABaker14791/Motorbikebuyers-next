import { useRef, useState } from "react";
import { useRouter } from "next/router";

// Bug with next router requires this hook, using router within useEffect caused linting error

export const usePush = () => {
	const router = useRouter();
	const routerRef = useRef(router);
	routerRef.current = router;
	const [routerPush] = useState(() => {
		const push = (path) => {
			routerRef.current.push(path);
		};
		return push;
	});

	return routerPush;
};
