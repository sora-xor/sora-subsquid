FROM subsquid/substrate-ingest:firesquid
COPY . .
COPY src/typesBundle.json /configs/typesBundle.json
ENV NODE_OPTIONS=--max_old_space_size=4096
CMD ["/bin/sh"]