import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { z } from 'zod'

const server = new McpServer({
    name: "sharepooint",
    version: "1.0.0"
})


server.tool(
    "create-file",
    {
        text: z.string(),
    },
    async ({text}) => {
        // add logic there
        return {
            content: [
                {
                    type: "text",
                    text: `${text} was added to sharepoint`
                }
            ]
        }
    }
)

async function main() {
    const transport = new StdioServerTransport()
    await server.connect(transport)
}

main().catch(error => {
    console.log(error);
    process.exit(1)
})