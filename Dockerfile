FROM subsquid/substrate-ingest:firesquid
COPY . .
COPY src/typesBundle.json /configs/typesBundle.json
ENV NODE_OPTIONS=--max_old_space_size=8192
CMD ["/bin/sh"]