
    @Override
    protected void doPost(HttpServletRequest servletRequest, HttpServletResponse servletResponse)
            throws IOException {
        String mp3file = "https://raw.githubusercontent.com/TwilioDevEd/"
                + "ivr-phone-tree-servlets/master/et-phone.mp3";
        VoiceResponse response = new VoiceResponse.Builder()
                .gather(new Gather.Builder()
                        .action("/menu/show")
                        .numDigits(1)
                        .build())
                .play(new Play.Builder(mp3file)
                        .loop(3)
                        .build())
                .build();

        servletResponse.setContentType("text/xml");
        try {
            servletResponse.getWriter().write(response.toXml());
        } catch (TwiMLException e) {
            throw new RuntimeException(e);
        }
    }