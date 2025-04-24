export async function POST(req) {
  const data = await req.json()
  const { name, email, message } = data

  console.log("Form Submitted:", { name, email, message })

  return Response.json({ success: true })
}
